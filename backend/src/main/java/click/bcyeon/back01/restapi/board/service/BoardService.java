package click.bcyeon.back01.restapi.board.service;

import click.bcyeon.back01.restapi.board.dto.BoardDto;
import click.bcyeon.back01.restapi.board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    public List<BoardDto> getAllBoards() {
        return boardMapper.selectBoardList();
    }

    public BoardDto putBoard(BoardDto boardDto) {
        boardMapper.insertBoard(boardDto);
        return boardDto;
    }

    public boolean isPasswordValid(BoardDto boardDto){
        return boardMapper.selectPostCountByBoardDto(boardDto) == 1;
    }

    public void deletePost(int postId) {
        boardMapper.deletePost(postId);
    }
}
