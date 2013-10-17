<?php

/* groups.html.twig */
class __TwigTemplate_f61c0ace0d0b63541b5dfc75cb4f163d6a1c08566d1c4a2b7e930abd76e82db1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<div id=\"map-continents\">
    <ul class=\"continents\">
        <li class=\"c1\"><a href=\"#africa\">Africa</a></li>
        <li class=\"c2\"><a href=\"#asia\">Asia</a></li>
        <li class=\"c3\"><a href=\"#australia-and-southern-pacific\">Australia and Southern Pacific</a></li>
        <li class=\"c4\"><a href=\"#europe\">Europe</a></li>
        <li class=\"c5\"><a href=\"#north-america\">North America</a></li>
        <li class=\"c6\"><a href=\"#south-america\">South America</a></li>
    </ul>
</div>

<script type=\"text/javascript\">
    \$(function(\$) {
        \$('#map-continents').cssMap({'size': 960});
    });
</script>";
    }

    public function getTemplateName()
    {
        return "groups.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}
