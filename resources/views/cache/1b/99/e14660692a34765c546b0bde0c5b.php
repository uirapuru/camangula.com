<?php

/* index.twig */
class __TwigTemplate_1b99e14660692a34765c546b0bde0c5b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("layout.twig");

        $this->blocks = array(
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = array())
    {
        // line 4
        echo "<div class=\"container-fluid\" ng-controller=\"BoardController\">
    <div class=\"row-fluid\">
        <div id=\"tails\" class=\"span8\">
            <a ng-repeat='video in videos' class=\"item size{[\$index%7]}\" href=\"http://www.youtube.com/watch?v={[video]}\" rel=\"prettyPhoto[videos]\">
                <img src=\"#\" ng-src=\"http://img.youtube.com/vi/{[video]}/0.jpg\" />
            </a>
        </div>
        <ul class=\"span4\" id=\"mainMenu\">
            <li class=\"item\">
                <a href=\"#\">News</a>
            </li>
            <li class=\"item\">
                <a href=\"#\">Events</a>
            </li>
            <li class=\"item\">
                <a href=\"/clubs.html\">Clubs</a>
            </li>
            <li class=\"item\">
                <a href=\"#\">Contact</a>
            </li>
        </ul>

    </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  31 => 4,  28 => 3,);
    }
}
