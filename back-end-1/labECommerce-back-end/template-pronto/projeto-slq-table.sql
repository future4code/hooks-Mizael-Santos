USE `hooks_4313499_mizael_santos`;

SET SQL_SAFE_UPDATES = 0;


CREATE TABLE Labecommerce_users(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255)
);

CREATE TABLE labecommerce_products(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255),
price INT,
image_url VARCHAR(255)
);

CREATE TABLE Labecommerce_purchases(
id VARCHAR(255) PRIMARY KEY,
user_id VARCHAR(255) NOT NULL,
product_id VARCHAR(255) NOT NUll,
quantity INT NOT NULL,
total_price INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES Labecommerce_users(id),
FOREIGN KEY (product_id) REFERENCES Labecommerce_products(id)
);


INSERT INTO Labecommerce_users(id, name, email, password)
VALUES("1" , "Mizael" , "Miza@gmail.com" , "mizael1234"),
	  ("2" , "Gabriel" , "gabi@gmail.com" , "gabi1234"),
      ("3" , "Paulo" , "paulo@gmail.com" , "paulo1234"),
      ("4" , "Ranyel" , "rany@gmail.com" , "rany1234");
      
INSERT INTO labecommerce_products(id, name, price, image_url)
VALUES("1" , "Computador" , 3000 , "https://cdn.dooca.store/1841/products/kit-caju-completo_620x620+fill_ffffff+crop_center.jpg?v=1658439722&webp=0"),
	  ("2" , "Headfone" , 200 , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSciFwa2U9Nt_3H7rnanynHgp0QrIZSON-_7Q&usqp=CAU"),
      ("3" , "Celular" , 1300 , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPYDxtOpp_gXWgsmuYRBECRi75i0lbWfeGw&usqp=CAU"),
      ("4" , "Mouse" , 100 , "https://cf.shopee.com.br/file/474ad3f28c0fc3c20bcf878c2438805c");      
      
      
SELECT * FROM Labecommerce_users;

SELECT * FROM labecommerce_products;
