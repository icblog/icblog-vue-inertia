<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Lib\Meta;

class NotificationController extends Controller{

    public function index(Request $request){
        $redirectLink =  "";
        $type = "";
        $msg = "";
        $redirectTime = "";

        if ($request->session()->has('redirectLink')) {
          $redirectLink = $request->session()->pull('redirectLink','');
          $request->session()->forget('redirectLink');
        }

        if ($request->session()->has('type')) {
          $type = $request->session()->pull('type','');
          $request->session()->forget('type');
        }

        if ($request->session()->has('msg')) {
          $msg = $request->session()->pull('msg','');
          $request->session()->forget('msg');
        }
        if ($request->session()->has('redirectTime')) {
          $redirectTime = $request->session()->pull('redirectTime','');
          $request->session()->forget('redirectTime');
        }

        if($type == ""){
          return redirect("/");
        }

        
        $pageTitle  =  "Notification";
        $dataToView = array(
          "pageTitle"=>$pageTitle,
          "msgData" => [
            "redirectLink"=> $redirectLink,
            "type"=> $type,
            "msg" => $msg,
            "redirectTime"=> $redirectTime
            ]
        );
        Meta::addMeta('title', $pageTitle);
        Meta::addMeta('description', 'Isaac Cobbinah web developer notification page');
        return Inertia::render('Notification', $dataToView);
    }//End index

   

    
}

