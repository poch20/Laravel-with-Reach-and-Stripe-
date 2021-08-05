<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Category;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
       'category_id',
       'meta_title',
       'meta_keyword',
       'meta_description',
       'slug',
       'name',
       'description',
       'status',
       'filename',

       'brand',
       'selling_price',
       'original_price',
       'qty',
       'img',
       'featured',
       'popular',
     ];

     protected $table = 'create_products_table';
     //protected $primaryKey = 'categoryPrimaryKey';
     protected $with = ['CategoryModel__is_a_component_of_ProductModel_as_a_foreignKey'];

     public function CategoryModel__is_a_component_of_ProductModel_as_a_foreignKey(){
       return $this->belongsTo(Category::class, 'category_id', 'id');
     }

}
