package click.bcyeon.back01.restapi.board.mapper;

import click.bcyeon.back01.restapi.board.dto.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {

    public List<BoardDto> selectBoardList();

    public void insertBoard(BoardDto boardDto);

    public int selectPostCountByBoardDto(BoardDto boardDto);

    public void deletePost(int postId);
}
