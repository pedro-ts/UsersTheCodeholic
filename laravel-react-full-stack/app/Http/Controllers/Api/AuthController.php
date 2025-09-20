<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;   // importa a Facade para fazer as funções que Auth funcionar
use App\Models\User;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        /**
         * @var \App\Models\User $user 
         */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        // return response([
        //     'user' => $user,
        //     'token' => $token
        // ])

        return response(compact('user', 'token'));
    }
    public function login(LoginRequest $request){
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Providded email address or passworda is incorrect'
            ]);
        };
        /** @var \App\Models\User $user */
        $user = Auth::user();
        
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));
    }
    public function logout(Request $request){
        /**
         * @var User $user
         */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
