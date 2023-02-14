<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SignUpController extends Controller
{
    /**
     * Return Signup view file
     */
    public function index()
    {
        return Inertia::render('signup/index');
    }
}
