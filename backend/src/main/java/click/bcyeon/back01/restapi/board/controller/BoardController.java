package click.bcyeon.back01.restapi.board.controller;

import click.bcyeon.back01.restapi.board.dto.BoardDto;
import click.bcyeon.back01.restapi.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RequestMapping("/api/board")
@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    
    @GetMapping("/list")
    public ResponseEntity<List<BoardDto>> getBoards() {
        List<BoardDto> list = boardService.getAllBoards();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/input")
    public ResponseEntity<BoardDto> addBoard(@RequestBody BoardDto boardDto) {
        BoardDto saved = boardService.putBoard(boardDto);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteBoard(@RequestBody BoardDto boardDto) {
        if (boardService.isPasswordValid(boardDto)) {
            boardService.deletePost(boardDto.getId());
            return ResponseEntity.ok().build(); // 200 OK
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Incorrect password."); // 403 Forbidden
        }
    }
}
