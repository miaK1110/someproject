<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Return Topage view file
     */
    public function index()
    {
        return Inertia::render('index');
    }
}
