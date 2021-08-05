<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    use HasFactory;

    protected $fillable = [
       'meta_title',
       'meta_keyword',
       'meta_description',
       'slug',
       'name',
       'description',
       'status',
     ];

     protected $table = 'create_categories_table';
     //protected $primaryKey = 'categoryPrimaryKey';

     public function CategoryModelCanHaveManyUsers(){
       return $this->belongsToMany('App\Models\User');
     }

}
