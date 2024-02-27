<?php
namespace App\Lib;

class Meta{
    protected static $meta = [];
    protected static $keywords_content = "Function, tags, meta, get, PHP, HTML, Python, CSS, SQL, JavaScript, Perl, PHP, Java, C, C++, C#, jQuery, Bootstrap, Colors, XML, MySQL, Icons, NodeJS, React, Graphics, Angular, R, AI, Git, Machine Learning, Data Science, Tutorials, Programming, Data Structure, Algorithms, Web Development, Training, Learning, Quiz, Exercises, Courses, References, Computer Science, Management, Finance, Examples, Articles, Demos, Tips, Website";
    public static function addMeta($name, $content){
        
        if(count(static::$meta) === 0){
            static::$meta['keywords'] = static::$keywords_content;
        }
        static::$meta[$name] = $content;
    }

    public static function render(){
        $html = '';
        foreach (static::$meta as $name => $content) {
            $html .= '<meta name="'.$name.'" content="'.$content.'" />'.PHP_EOL;
        }
        return $html;
    }

  
}// end class