package com.boot.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import com.boot.apiErrors.EntityNotFoundException;
import com.boot.model.User;
import com.boot.repository.UserRepository;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	UserRepository userRepo;
	
	@RequestMapping("/getAllUsers")
	@CrossOrigin(origins = "http://localhost:4200")
	public Iterable<User> getAllUsers(){
		return userRepo.findAll();
	}
	
	@RequestMapping("/getUserById/{userId}")
	@CrossOrigin(origins = "http://localhost:4200")
	public User getUserById(@PathVariable int userId){
		User u=userRepo.findById(userId);
		System.out.println(u);
		return u;
	}
	
	@RequestMapping("/addUser")
	@CrossOrigin(origins = "http://localhost:4200")
	public void addUser(@RequestBody User user){
		userRepo.save(user);
	}
	
	@RequestMapping("/updateUser")
	@CrossOrigin(origins = "http://localhost:4200")
	public void updateUser(@RequestBody User user){
//		if(userRepo.existsById(user.getId())){
//			
//		}
		userRepo.save(user);
	}
	
	@RequestMapping(value="/deleteUser/{userId}", method=RequestMethod.DELETE)
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteUser(@PathVariable int userId){
		System.out.println("User Id = " + userId);
		userRepo.deleteById(userId);
		userRepo.existsById(userId);
	}

}
