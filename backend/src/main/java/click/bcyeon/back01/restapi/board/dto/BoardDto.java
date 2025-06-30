package click.bcyeon.back01.restapi.board.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BoardDto {
    private int id;
    private String nickname;
    private String password;
    private String content;
    private boolean admin;
    private Date createdAt;
    private boolean isDeleted;
}
