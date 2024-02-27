<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Lib\Meta;


class AdminDashboardController extends BaseController{

   public function index(){
    $pageTitle  =  "Admin dashboard";
    $dataToView = array("pageTitle"=>$pageTitle);
    Meta::addMeta('title', $pageTitle);
    Meta::addMeta('description', 'Isaac Cobbinah web developer admin dashboard page');
    return Inertia::render('admin/Dashboard', $dataToView);
       
  }

    
}
