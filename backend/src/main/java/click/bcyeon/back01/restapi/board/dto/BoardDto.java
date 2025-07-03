package click.bcyeon.back01.restapi.board.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class BoardDto {
    private int id;
    private String nickname;
    private String password;
    private String content;
    @JsonProperty("isAdmin")
    private boolean isAdmin;
    private Date createdAt;
    private boolean isDeleted;
}
