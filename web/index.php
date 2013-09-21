<?php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Translation\Loader\YamlFileLoader;
use Silex\Provider\FormServiceProvider;
use Symfony\Component\Validator\Constraints as Assert;
use SilexAssetic\AsseticServiceProvider; 

set_include_path(implode(PATH_SEPARATOR,
                         array(
    __DIR__ . "/../vendor",
    get_include_path()
)));

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../app/bootstrap.php';

$bootstrap = new Bootstrap();
$bootstrap->configure();
$bootstrap->registerServices();

$app = $bootstrap->getApp();

$app->match('/clubs.html',
          function () use ($app) {
                    return $app['twig']->render('clubs.twig',array());
                });

$app->get('/',
          function () use ($app) {
                    return $app['twig']->render('index.twig',array());
                });
$app->run();
