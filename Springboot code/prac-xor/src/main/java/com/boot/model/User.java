package com.boot.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="users_info")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="user_id")
	Integer id;
	
	@NotNull
	@Column(name="user_name")
	String name;
	
	@NotNull
	@Column(name="user_age")
	int age;
	
	@NotNull
	@Column(name="user_contact")
	String phoneNumber;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
	
}
