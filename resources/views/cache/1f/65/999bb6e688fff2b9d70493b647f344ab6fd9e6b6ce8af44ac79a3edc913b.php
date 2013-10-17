<?php

/* start.html.twig */
class __TwigTemplate_1f65999bb6e688fff2b9d70493b647f344ab6fd9e6b6ce8af44ac79a3edc913b extends Twig_Template
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
        $this->displayBlock('content', $context, $blocks);
    }

    public function block_content($context, array $blocks = array())
    {
        // line 2
        echo "<div id=\"tails\" videos=\"collection\" ng-controller=\"BoardController\"></div>
";
    }

    public function getTemplateName()
    {
        return "start.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  26 => 2,  20 => 1,);
    }
}
