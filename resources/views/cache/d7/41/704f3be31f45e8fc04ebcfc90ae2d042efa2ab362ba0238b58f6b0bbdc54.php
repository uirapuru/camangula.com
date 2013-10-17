<?php

/* news.html.twig */
class __TwigTemplate_d741704f3be31f45e8fc04ebcfc90ae2d042efa2ab362ba0238b58f6b0bbdc54 extends Twig_Template
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
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["newsCollection"]) ? $context["newsCollection"] : $this->getContext($context, "newsCollection")));
        foreach ($context['_seq'] as $context["_key"] => $context["news"]) {
            // line 2
            echo "<article id=\"";
            echo twig_escape_filter($this->env, ("news" . $this->getAttribute((isset($context["news"]) ? $context["news"] : $this->getContext($context, "news")), "id")), "html", null, true);
            echo "\">
    <h3>";
            // line 3
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["news"]) ? $context["news"] : $this->getContext($context, "news")), "timestamp"), "html", null, true);
            echo "</h3>
    <section>";
            // line 4
            echo twig_escape_filter($this->env, $this->getAttribute((isset($context["news"]) ? $context["news"] : $this->getContext($context, "news")), "content"), "html", null, true);
            echo "</section>
</article>
";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['news'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "news.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  32 => 4,  28 => 3,  23 => 2,  19 => 1,);
    }
}
