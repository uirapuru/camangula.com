<?php

/* common/layout.html.twig */
class __TwigTemplate_60be4713c871bb5d1b26692baffcdf7b75e7c31eef25ad17b8a4e715682ea039 extends Twig_Template
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
        ";
        // line 7
        $this->env->loadTemplate("common/header.html.twig")->display($context);
        // line 8
        echo "    </head>
    <body>
        <div class=\"container-fluid\" ng-controller=\"BoardController\">
            <div class=\"row-fluid\">

                <div class=\"container-fluid\" ng-controller=\"BoardController\">
                    <div class=\"row-fluid\">
                        <div ng-view class=\"span8\">
                            ";
        // line 16
        $this->displayBlock('content', $context, $blocks);
        // line 17
        echo "                        </div>
                        <ul class=\"span4 pull-right\" id=\"mainMenu\">
                            ";
        // line 19
        $this->env->loadTemplate("common/menu.twig")->display($context);
        // line 20
        echo "                        </ul>
                    </div>
                </div>



            </div>
        </div>

        ";
        // line 29
        $this->env->loadTemplate("common/footer.html.twig")->display($context);
        // line 30
        echo "    </body>
</html>
";
    }

    // line 16
    public function block_content($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "common/layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 16,  61 => 30,  59 => 29,  48 => 20,  46 => 19,  42 => 17,  40 => 16,  30 => 8,  28 => 7,  20 => 1,);
    }
}
