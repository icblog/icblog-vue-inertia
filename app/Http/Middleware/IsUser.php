<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class IsUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
         if (Auth::check()) {
            return $next($request);
        }
        //Store intended url in a session before redirecting to login page
        $request->session()->forget('intendedUrl');
        $request->session()->put('intendedUrl', $request->path());
        return redirect()->route("login.index")->with('error', 'Sorry your session has expired or you do not have permission to access that page');
         

 
    }
}
