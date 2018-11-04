<?php

class Human
{
  public $name;

  public static $population = 2;
  const HEAD_COUNT = 1;

  public function __construct($name)
  {
    $this->name = $name;
  }
  public function sayName()
  {
    echo "my name is: " . $this->name . "<br>";
  }

  public function __destruct()
  {

    echo "Destroy from destructor" . $this->name;
  }
  public static function printPop()
  {
    echo "Bye" . self::$population;
  }
}

$mark = new Human("Mark");

$mark->sayName();
unset($mark);
echo "<br>";
echo Human::$population;
echo "<br>";
echo Human::HEAD_COUNT;

define("LEET", 1337);

$names = array('Alex', "Susan", "Sebastion");
$days = ["Monday", "Tuesday"];

$days[] = "Tuesday";

echo "<pre>";
print_r($days);

$food = [
  "Sausage" => "Zaebis",
  "Bred" => 1
];
// echo "<pre>";
echo $food["Sausage"]
?>