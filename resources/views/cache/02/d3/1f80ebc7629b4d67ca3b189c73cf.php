<?php

/* layout.twig */
class __TwigTemplate_02d31f80ebc7629b4d67ca3b189c73cf extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<!--[if lt IE 7]>      <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"> <![endif]-->
<!--[if IE 7]>         <html class=\"no-js lt-ie9 lt-ie8\"> <![endif]-->
<!--[if IE 8]>         <html class=\"no-js lt-ie9\"> <![endif]-->
<!--[if gt IE 8]><!--> <html class=\"no-js\" ng-app=\"myApp\"> <!--<![endif]-->
    <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
        <title>Camangula.com | Grupo de Capoeira Camangula - Mestre Nem</title>
        <meta name=\"description\" content=\"\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel=\"stylesheet\" href=\"css/normalize.css\">
        <link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">
        <link rel=\"stylesheet\" href=\"css/bootstrap-responsive.min.css\">
        <link rel=\"stylesheet\" href=\"css/prettyPhoto.css\">
        <link rel=\"stylesheet\" href=\"css/main.css\">
        <script src=\"js/vendor/modernizr-2.6.2.min.js\"></script>
    </head>
    <body>
        ";
        // line 23
        $this->displayBlock('content', $context, $blocks);
        // line 24
        echo "        <!--[if lt IE 7]>
            <p class=\"browsehappy\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        
        <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js\"></script>
        <script>window.jQuery || document.write('<script src=\"js/vendor/jquery-1.10.2.min.js\"><\\/script>')</script>
        <script src=\"//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.js\"></script>

        <script src=\"/js/vendor/masonry.pkgd.js\"></script>
        <script src=\"/js/jquery.prettyPhoto.js\"></script>
        <script src=\"/js/jquery.prettyPhoto.js\"></script>
        
        <script src=\"/js/plugins.js\"></script>
        <script src=\"/js/main.js\"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
(function(b, o, i, l, e, r) {
    b.GoogleAnalyticsObject = l;
    b[l] || (b[l] =
            function() {
                (b[l].q = b[l].q || []).push(arguments)
            });
    b[l].l = +new Date;
    e = o.createElement(i);
    r = o.getElementsByTagName(i)[0];
    e.src = '//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e, r)
}(window, document, 'script', 'ga'));
ga('create', 'UA-XXXXX-X');
ga('send', 'pageview');
        </script>
    </body>
</html>
";
    }

    // line 23
    public function block_content($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "layout.twig";
    }

    public function getDebugInfo()
    {
        return array (  86 => 23,  46 => 24,  44 => 23,  20 => 1,  31 => 4,  28 => 3,);
    }
}
