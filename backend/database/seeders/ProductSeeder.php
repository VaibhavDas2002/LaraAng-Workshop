<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            ['name' => 'Wireless Headphones Pro', 'description' => 'Premium noise-cancelling headphones with 30h battery life.', 'price' => 249.99, 'stock' => 45],
            ['name' => 'Mechanical Keyboard RGB', 'description' => 'Tactile mechanical switches with full RGB backlighting.', 'price' => 129.99, 'stock' => 78],
            ['name' => 'Ergonomic Mouse', 'description' => 'Vertical ergonomic design reduces wrist strain.', 'price' => 69.99, 'stock' => 120],
            ['name' => '4K Webcam', 'description' => 'Crystal clear 4K video for professional video calls.', 'price' => 189.99, 'stock' => 33],
            ['name' => 'USB-C Hub 7-in-1', 'description' => '7 ports including HDMI, USB 3.0, SD card reader.', 'price' => 49.99, 'stock' => 0],
            ['name' => 'Monitor Stand', 'description' => 'Adjustable aluminum monitor riser with cable management.', 'price' => 39.99, 'stock' => 55],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
