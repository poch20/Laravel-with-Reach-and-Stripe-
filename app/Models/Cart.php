<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = ['id'];

    public function cart_items() {
        return $this->hasMany('App\Models\CartItem');
    }
}
