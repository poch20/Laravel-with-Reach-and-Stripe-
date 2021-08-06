<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RedirectsForFrontEndFrameworks;

use App\Models\CartItem;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function() {
  return view('welcome');
});

Route::prefix('/')->group(function() {
  Route::get('/stripe-gateway-test', function () {
      return view('stripe_payment_system');
  });



  Route::group(['namespace' => 'App\Http\Controllers\ApiForFrontEndFrameworks'], function() {
    Route::get('checkout-success', [RedirectsForFrontEndFrameworks::class,'success'])->where( 'path','([-a-z0-9_/s]+)' )
    ->name('checkout-success');
    Route::get('checkout-canceled', [RedirectsForFrontEndFrameworks::class,'cancel'])->where( 'path','([-a-z0-9_/s]+)' )
    ->name('checkout-cancel');
    Route::get('success', 'StripeCheckoutController@success')->name('success');
    Route::get('cancel', 'StripeCheckoutController@cancel')->name('cancel');
  });

  Route::get('{path}', function() {
    return view('welcome');
  })->where( 'path','([-a-z0-9_/s]+)' )
  ->name('any.path');

  Route::get('laravelphp_version_of_cartItem', function () {
    $cartItems = CartItem::with('product')->get();
    return view('cart', compact('cartItems'));
  });
  Route::group( ['middleware' => ['auth:sanctum', 'verified'] ], function () {
  });
});
