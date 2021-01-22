import { getNewTimeStamp } from "./localstorage";
import { IPostLS, IBoardLS, KEY_BOARDS } from "./type";

export function getPostsLS(boardTimestamp: number): Array<IPostLS> {
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards: Array<IBoardLS> = JSON.parse(boards);
    const board: Array<IBoardLS> = parsedBoards.filter(
        (board) => board.timestamp === boardTimestamp
    );
    const posts = board[0].posts;

    return posts;
}

export function createPostLS(newPost: IPostLS): boolean {
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards: Array<IBoardLS> = JSON.parse(boards);
    const updatedBoard: Array<IBoardLS> = parsedBoards.map((board: IBoardLS) =>
        board.timestamp === newPost.boardId
            ? { ...board, posts: [...board.posts, newPost] }
            : board
    );
    localStorage.setItem(KEY_BOARDS, JSON.stringify(updatedBoard));
    return true;
}

export function updatePostLS(editedPost: IPostLS): boolean {
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards: Array<IBoardLS> = JSON.parse(boards);
    const updatedBoard: Array<IBoardLS> = parsedBoards.map((board: IBoardLS) =>
        board.timestamp === editedPost.boardId
            ? {
                  ...board,
                  posts: board.posts.map((post) =>
                      post.timestamp === editedPost.timestamp
                          ? { ...editedPost, modified: getNewTimeStamp() }
                          : post
                  ),
              }
            : board
    );
    localStorage.setItem(KEY_BOARDS, JSON.stringify(updatedBoard));
    return true;
}

export function deletePostLS(boardId: number, timestamp: number): boolean {
    const boards = localStorage.getItem(KEY_BOARDS) || "[]";
    const parsedBoards: Array<IBoardLS> = JSON.parse(boards);
    const updatedBoard: Array<IBoardLS> = parsedBoards.map((board: IBoardLS) =>
        board.timestamp === boardId
            ? {
                  ...board,
                  posts: board.posts.filter(
                      (post) => post.timestamp !== timestamp
                  ),
              }
            : board
    );
    localStorage.setItem(KEY_BOARDS, JSON.stringify(updatedBoard));
    return true;
}
