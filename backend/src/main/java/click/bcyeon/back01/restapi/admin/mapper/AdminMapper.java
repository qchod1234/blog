package click.bcyeon.back01.restapi.admin.mapper;

import click.bcyeon.back01.restapi.admin.dto.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMapper {
    Admin findById(String id);
}
