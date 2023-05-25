//1
type CTStudent = {
    id: string;
    name: string;
    age: number;
    isTired: boolean;
    projectsCompleted: string[];
    pet?: string;
};
  
let student1: CTStudent = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted: ["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
};
  
let student2: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted: ["HTML Portfolio"],
};
  
let student3: CTStudent = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted: ["Matrix", "Biological Interface Program"],
    pet: 'cat'
};

  
  //2

type Fruit = {
    color: string;
    shape: string;
};
  
let apple: Fruit = { color: "red", shape: "sphere" };
let eaten: Fruit = null;
  
function printFruitColor(fruit: Fruit | null): void {
    if (fruit) {
      console.log(fruit.color);
    } else {
      console.log("You ate my fruit already");
    };
};
  
  printFruitColor(apple);  // Output: red
  printFruitColor(eaten);  // Output: eaten

//3

type Book = {
    isbn: string;
    title: string;
    author: string;
};
  
type DigitalBook = {
    fileType: string;
};
  
type Ebook = Book | DigitalBook;
  
const ebookInstance: Ebook = {
    isbn: "978-0-123456-78-9",
    title: "The Great Ebook",
    author: "John Doe"
};
  
//4
enum Category {
    Shirts = "Shirts",
    Shoes = "Shoes",
    Pants = "Pants",
    Hats = "Hats",
}
  
type ShopItem = {
    id: number;
    price: number;
    description: string;
    color?: string;
    category: Category;
    keywords: string[];
};
  
const item1: ShopItem = {
    id: 1,
    price: 19.99,
    description: "Ironman Tshirt",
    color: "Red",
    category: Category.Shirts,
    keywords: ["Marvel", "Endgame", "Ironman", "Character Tees", "Tony Stark"],
};
  
const item2: ShopItem = {
    id: 2,
    price: 59.99,
    description: "Running Shoes",
    category: Category.Shoes,
    keywords: ["Athletic", "Running", "Sports", "Sneakers"],
};
  
  const item3: ShopItem = {
    id: 3,
    price: 34.99,
    description: "Denim Pants",
    category: Category.Pants,
    keywords: ["Jeans", "Casual", "Fashion"],
};
  

