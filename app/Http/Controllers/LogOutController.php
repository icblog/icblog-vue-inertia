<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Lib\Meta;


class LogOutController extends BaseController{

    public function index(){
      $pageTitle  =  "Logout";
      $dataToView = array("pageTitle"=>$pageTitle);
      Meta::addMeta('title', $pageTitle);
      Meta::addMeta('description', 'Isaac Cobbinah web developer logout page');
        return Inertia::render('auth/Logout',$dataToView);
    }//End index

    public function handleLogout(Request $request){
      $redirectLink = "/home";
      $type = "success";
      $msg = "You have log out successfully";
      $redirectTime = 2000;
        try {

            Auth::logout();
       
          $request->session()->invalidate();
       
          $request->session()->regenerateToken();

          //set session data for notification page
            $this->setNotificationSessionData(
              $redirectLink,
              $type,
              $msg,
              $redirectTime,
              $request
            );
        
          return redirect("/notification");
       
     } catch (\Exception $e) {

        $type = "error";
        $msg = "Sorry system error, please clear your browser history or close your browser and your session should be destroyed thank you";
        $this->setNotificationSessionData(
          $redirectLink,
          $type,
          $msg,
          10000,
          $request
        );
        
       return redirect("/notification");
       
      }
        
    }//End logout

    
}

