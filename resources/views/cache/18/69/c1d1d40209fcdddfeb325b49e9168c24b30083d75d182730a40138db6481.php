<?php

/* events.html.twig */
class __TwigTemplate_1869c1d1d40209fcdddfeb325b49e9168c24b30083d75d182730a40138db6481 extends Twig_Template
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
        echo "<div class=\"row-fluid\">
    <ul class=\"span3 offset1\" id=\"listEvents\">
        <li ng-repeat=\"(date,data) in events\" class=\"item\">
            <h1>{[date]}</h1>
            {[ data.description ]}
        </li>
    </ul>
</div>";
    }

    public function getTemplateName()
    {
        return "events.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }
}
