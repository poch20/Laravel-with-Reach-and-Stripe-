<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiForFrontEndFrameworks\SanctumAuth;
use App\Http\Controllers\ApiForFrontEndFrameworks\CategoryControllerAPI;
use App\Http\Controllers\ApiForFrontEndFrameworks\ProductControllerAPI;
use App\Http\Controllers\StripeController;
// use Illuminate\Http\Response;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


#Public Authentication Systems
Route::post('/sanctum-register/', [SanctumAuth::class, 'triggered_state_from_react_register_gui_form']);
Route::post('/sanctum-login', [SanctumAuth::class, 'triggered_state_from_react_login_gui_form']);


#Global Public Routes CRUD
Route::group(['namespace' => 'App\Http\Controllers\ApiForFrontEndFrameworks'], function() {
  Route::get('/get-products', [ProductControllerAPI::class, 'read_products_for_clients']);
  Route::get('/get-products/{id}', [ProductControllerAPI::class, 'read_products_for_clients_by_id']);
  Route::post('/stripe', [StripeController::class,'stripePayment'])->name("stripe.post");
  Route::post('/checkout', [StripeController::class,'checkout'])->name("stripe.post");
  Route::get('products/{product}/addToCart', 'ProductControllerAPI@addToCart')->name('products.addToCart');
  Route::get('retrived-cart-items', 'CartController@index')->name('cart');
  Route::get('cart/{product}/remove', 'CartController@removeProduct')->name('cart.removeProduct');
  Route::post('checkout-to-stripe', 'StripeCheckoutController@checkout')->name('checkout.creates.stripe.session');
  Route::post('test-checkout-to-stripe', 'StripeCheckoutController@testPreBuilt')->name('checkout.creates.stripe.session');

  // Route::get('/search-products/{name}', [Products::class, 'search']);
});

#Protected Routes
Route::group(['middleware' => ['auth:sanctum', 'isAPIAdmin']], function () {
  Route::get('/checkingAuthenticated', function() {
    return response()->json(['message'=>'You are in', 'status'=>200],200);
  });

  Route::apiResources(['/Sanctum-CategoryKeyForAdminsOnly' => 'App\Http\Controllers\ApiForFrontEndFrameworks\CategoryControllerAPI']);
  Route::get('/Sanctum__ForAdminsOnly/GetAllCategory_Where__statusIsZero', [CategoryControllerAPI::class, 'getAllCategory__withCondition']);
  Route::apiResources(['/Sanctum-ProductKeyForAdminsOnly' => 'App\Http\Controllers\ApiForFrontEndFrameworks\ProductControllerAPI']);
  Route::post('/spoofer-put-products', [ProductControllerAPI::class, 'putSpoofer']);

});

Route::middleware(['auth:sanctum'])->group(function(){
  Route::post('/sanctum-logout/', [SanctumAuth::class, 'triggered_state_from_react_logout_button']);
});
