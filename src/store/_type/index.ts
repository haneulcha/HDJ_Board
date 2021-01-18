import * as board from './board'
import * as post from './post'

export interface IrootState {
    board: {
        boards: Array<board.Board>
    }
    post: {
        posts: Array<post.Post>
    }
}