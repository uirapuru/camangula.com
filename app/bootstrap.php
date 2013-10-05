<?php
error_reporting(E_ALL);

class Bootstrap {

    private $app;

    public function __construct($app = null) {
        if ($app == null)
        {
            $app = new Silex\Application();
        }

        $this->app = $app;
    }

    public function configure() {
        $this->app["debug"] = true;
    }

    public function getApp() {
        return $this->app;
    }

    public function setApp($app) {
        $this->app = $app;
    }

    public function registerServices() {
        $this->app->register(new Silex\Provider\TwigServiceProvider(), array(
            'twig.path'    => __DIR__ . '/../views',
            'twig.options' => array(
                'cache' => __DIR__ . '/../views/cache',
            )
        ));

        $this->app->register(new Silex\Provider\SessionServiceProvider());
    }

}