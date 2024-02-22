package kz.bitlab.group1.security.securitypro1;

import kz.bitlab.group1.security.securitypro1.dto.CourseCategoryDto;
import kz.bitlab.group1.security.securitypro1.dto.CoursesDto;
import kz.bitlab.group1.security.securitypro1.dto.RoleDto;
import kz.bitlab.group1.security.securitypro1.dto.UsserDto;
import kz.bitlab.group1.security.securitypro1.mapper.CourseCategoryMapper;
import kz.bitlab.group1.security.securitypro1.mapper.CoursesMapper;
import kz.bitlab.group1.security.securitypro1.mapper.RoleMapper;
import kz.bitlab.group1.security.securitypro1.mapper.UsserMapper;
import kz.bitlab.group1.security.securitypro1.model.CourseCategory;
import kz.bitlab.group1.security.securitypro1.model.Courses;
import kz.bitlab.group1.security.securitypro1.model.Role;
import kz.bitlab.group1.security.securitypro1.model.Usser;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class Securitypro1ApplicationTests {


    @Autowired
    CoursesMapper coursesMapper;

    @Autowired
    RoleMapper roleMapper;

    @Autowired
    UsserMapper usserMapper;

    @Autowired
    CourseCategoryMapper courseCategoryMapper;


//    @Test
//    void testRolesMapperToDto() {
//        Role role = new Role();
//        role.setId(100L);
//        role.setRole("Hi");
//
//        List<Role> roles = new ArrayList<>();
//        roles.add(role);
//
//        Usser usser = new Usser();
//        usser.setId(120L);
//        usser.setFullName("Akbayan");
//        usser.setEmail("baibalayeva@bk.ru");
//        usser.setFullName("Baibalaeva Akbayan E");
//        usser.setRole(roles);
//
//        UsserDto usserDto = usserMapper.toDto(usser);
//        Assertions.assertEquals(usser.getEmail(), usserDto.getEmail());
//        Assertions.assertEquals(usser.getPassword(), usserDto.getPassword());
//        Assertions.assertEquals(usser.getFullName(), usserDto.getFullName());
//        Assertions.assertCon
//    }


//	@Test
//	void  testCourseMapperToDto(){
//
//		Role role=new Role();
//		role.setId(101L);
//		role.setRole("Hi");
//
//
//		List<Role> roles=new ArrayList<>();
//		roles.add(role);
//
//		Usser usser=new Usser();
//		usser.setId(112L);
//		usser.setFullName("Akbayan");
//		usser.setEmail("baibalayeva@bk.ru");
//		usser.setFullName("Baibalaeva Akbayan E");
//		usser.setRole(roles);
//
//		CourseCategory courseCategory=new CourseCategory();
//		courseCategory.setId(113L);
//		courseCategory.setName("Nokia");
//
//
//		Courses courses=new Courses();
//		courses.setId(100L);
//		courses.setName("Hi");
//		courses.setDescription("Hi");
//		courses.setPrice(3400);
//		courses.setRating(1);
//		courses.setAuthor(usser);
//
//		CoursesDto coursesDto=coursesMapper.toDto(courses);
//
//		Assertions.assertNotNull(coursesDto);
//		Assertions.assertEquals(courses.getId(), coursesDto.getId());
//		Assertions.assertEquals(courses.getName(), coursesDto.getCoursesName());
//		Assertions.assertEquals(courses.getDescription(), coursesDto.getDescription());
//		Assertions.assertEquals(courses.getPrice(), coursesDto.getPrice());
//		Assertions.assertEquals(courses.getRating(), coursesDto.getRating());
//
//	}

}
