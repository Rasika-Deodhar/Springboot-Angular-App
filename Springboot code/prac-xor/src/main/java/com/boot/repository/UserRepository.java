package com.boot.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.boot.model.User;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<User,Integer>{
	User findById(int userId);
	User findByName(String name);
	User findByAge(int age);
	User findByPhoneNumber(String phoneNumber);
//	boolean ifExists(int userId);
}
