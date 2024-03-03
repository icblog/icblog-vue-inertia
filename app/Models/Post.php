<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Post extends Model
{
  use HasFactory;

  public static function checkIfPostExist($whereValue, $whereColumn = "slug")
  {
    $outComeArray = array("error" => false, "success" => false);

    try {

      $post = DB::table('posts')->where($whereColumn, $whereValue)->first();

      if (!is_null($post)) {
        $outComeArray["success"] = true;
      }

      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End check if post exist

  public static function countPost($whereColumn = "", $equalToValue = "")
  {
    $outComeArray = array("error" => false, "postCount" => 0);

    try {

      if ($equalToValue == "") {
        $outComeArray["postCount"] = DB::table('posts')->count();
      } else {
        $outComeArray["postCount"] = DB::table('posts')->where($whereColumn, $equalToValue)->count();
      }
      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End check count post

  public static function fetchPost($paginate = false, $resultPerPage = 6, $isAdmin = false, $whereColumn = "", $equalToValue = "")
  {
    $outComeArray = array("error" => false, "postResult" => []);

    try {
      if ($isAdmin) {

        $query =  DB::table('posts')
          ->select('posts.id', 'posts.slug', 'posts.title', 'posts.status', 'posts.has_images', 'posts.cloudinary_folder_name', 'posts.views', 'posts.created_at', 'A.username as createdby_name', 'B.username as updatedby_name', DB::raw('group_concat(DISTINCT C.slug) as catSlugs, group_concat(DISTINCT C.name) as catNames, group_concat(DISTINCT I.img_url) as imgUrls'))
          ->leftjoin('users AS A', 'A.id', '=', 'posts.created_by')
          ->leftjoin('users AS B', 'B.id', '=', 'posts.updated_by')
          ->join('posts_x_categories AS X', 'posts.id', '=', 'X.post_id')
          ->join('categories AS C', 'C.id', '=', 'X.category_id')
          ->leftjoin('postimages AS I', function ($join) {
            $join->on('I.post_id', '=', 'posts.id')
              ->where('I.img_type', '=', 'main');
          });
        if ($equalToValue != '') {
          $query->where('posts.' . $whereColumn, $equalToValue);
        }
        $query->groupBy('posts.id')
          ->orderBy('posts.id', 'desc');
        if ($paginate) {
          $outComeArray["postResult"] = $query->paginate($resultPerPage);
        } else {
          $outComeArray["postResult"] = $query->limit($resultPerPage)
            ->get();
        }
      } //En if Admin

      return $outComeArray;
    } catch (\Exception $e) {
      //dd($e);
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End fetchPost

  public static function fetchSinglePost($isAdmin = false, $whereColumn = "", $equalToValue = "")
  {
    $outComeArray = array("error" => false, "postResult" => null);

    try {

      if ($isAdmin) {
        //if admin fetch extra columns
        //Add where condition
        $outComeArray["postResult"] =  DB::table('posts')
          //->select('posts.id','posts.title','posts.status','posts.created_at','posts.updated_at')
          ->select('posts.id', 'posts.title', 'posts.status', 'posts.has_images', 'posts.cloudinary_folder_name', 'posts.created_at', 'posts.updated_at', 'posts.body', 'A.username as createdby_name', 'B.username as updatedby_name', DB::raw('group_concat(DISTINCT C.id) as catIds, group_concat(DISTINCT C.name) as catNames, group_concat(DISTINCT I.img_url) as imgUrls, group_concat(DISTINCT I.public_id) as imgPublicIds'))
          ->leftjoin('users AS A', 'A.id', '=', 'posts.created_by')
          ->leftjoin('users AS B', 'B.id', '=', 'posts.updated_by')
          ->join('posts_x_categories AS X', 'posts.id', '=', 'X.post_id')
          ->join('categories AS C', 'C.id', '=', 'X.category_id')
          ->leftjoin('postimages AS I', 'I.post_id', '=', 'posts.id')
          ->groupBy('posts.id')
          ->where('posts.' . $whereColumn, $equalToValue)
          ->first();
      } else {

        $outComeArray["postResult"] =  DB::table('posts')
          ->select('posts.id', 'posts.title', 'posts.body', 'posts.views', 'posts.created_at', 'A.username as createdby_name', DB::raw('group_concat(DISTINCT C.slug) as catSlugs, group_concat(DISTINCT C.name) as catNames'))
          ->join('users AS A', 'A.id', '=', 'posts.created_by')
          ->join('posts_x_categories AS X', 'posts.id', '=', 'X.post_id')
          ->join('categories AS C', 'C.id', '=', 'X.category_id')
          ->where('posts.' . $whereColumn, $equalToValue)
          ->groupBy('posts.id')
          ->first();
      } //End if isAdmin

      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End fetch single Post

  public static function fetchBlogPost(
    $resultPerPage = 12,
    $paginate = false,
    $action,
    $slug,
    $sort
  ) {
    $outComeArray = array("error" => false, "postResult" => []);
    //$this->resultPerPage, $paginate, $action, $slug, $sort
    try {

      $query =  DB::table('posts')
        ->select('posts.slug', 'posts.title', 'posts.views', 'posts.created_at', 'A.username as createdby_name', DB::raw('group_concat(DISTINCT C.slug) as catSlugs, group_concat(DISTINCT C.name) as catNames, group_concat(DISTINCT I.img_url) as imgUrls'))
        ->join('users AS A', 'A.id', '=', 'posts.created_by')
        ->join('posts_x_categories AS X', 'posts.id', '=', 'X.post_id')
        ->join('categories AS C', 'C.id', '=', 'X.category_id')
        ->leftjoin('postimages AS I', function ($join) {
          $join->on('I.post_id', '=', 'posts.id')
            ->where('I.img_type', '=', 'main');
        })
        ->where('posts.status', 'published');

      if ($action == "category") {
        $query->where('C.slug', $slug);
      }

      $query->groupBy('posts.id');

      if ($sort == "popular") {
        $query->orderBy('posts.views', 'desc');
      } else {
        $query->orderBy('posts.id', 'desc');
      }

      if ($paginate) {
        $outComeArray["postResult"] = $query->paginate($resultPerPage);
      } else {
        $outComeArray["postResult"] = $query->limit($resultPerPage)
          ->get();
      }

      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End fetchBlogPost


  public static function fetchNextOrPreviousPost($currentPostId, $action)
  {
    $outComeArray = array("error" => false, "postResult" => null);

    try {
      $operator = "";
      if ($action == "previous") {
        $operator = "<";
      } else if ($action == "next") {
        $operator = ">";
      }
      $outComeArray["postResult"] = DB::table('posts')
        ->select('slug', 'title')
        ->where('status', 'published')
        ->where('id', $operator, $currentPostId)
        ->first();

      return $outComeArray;
    } catch (\Exception $e) {
      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End fetchNextOrPreviousPost

  public static function searchPost($searchedWord)
  {
    $outComeArray = array("error" => false, "searchResult" => []);

    try {

      $outComeArray["searchResult"] = DB::table('posts')
        //WITH IMAGE
        // ->select('slug','title',DB::raw('group_concat(DISTINCT I.img_url) as imgUrls'))
        // ->leftjoin('postimages AS I', function($join){
        //   $join->on('I.post_id', '=', 'posts.id')
        //         ->where('I.img_type','=','main');
        // })
        //WITHOUT IMAGE
        ->select('slug', 'title')
        ->where([
          ['title', 'LIKE', "%{$searchedWord}%"],
          ['status', '=', 'published'],
        ])
        // ->orWhere([
        //   ['body', 'LIKE', "%{$searchedWord}%"],
        //   ['status', '=', 'published'],
        // ])
        ->limit(10)
        ->get();

      return $outComeArray;
    } catch (\Exception $e) {

      $outComeArray["error"] = true;
      return $outComeArray;
    }
  } //End searchPost




}//End class
