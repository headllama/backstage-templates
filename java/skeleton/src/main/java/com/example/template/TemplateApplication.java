package com.example.template;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class "${{values.app_name}}"Application {

	public static void main(String[] args) {
		SpringApplication.run("${{values.app_name}}"Application.class, args);
	}

}
