<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Lib\Meta;


class HomeController extends BaseController
{

    public function index()
    {
        $pageTitle  =  "Home";
        $dataToView = array("pageTitle" => $pageTitle);
        Meta::addMeta('title', $pageTitle);
        Meta::addMeta('description', 'Isaac Cobbinah web developer');
        return Inertia::render('Home', $dataToView);
    }
    public function test()
    {
        $pageTitle  =  "Test";
        $dataToView = array("pageTitle" => $pageTitle);
        return Inertia::render('Test', $dataToView);
    }
}
