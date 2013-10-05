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
                    return $app['twig']->render('clubs.html.twig',array());
                });
$app->match('/events.html',
          function () use ($app) {
                    return $app['twig']->render('events.html.twig',array());
                });
$app->match('/news.html',
          function () use ($app) {
                    return $app['twig']->render('news.html.twig',array());
                });
$app->match('/contact.html',
          function () use ($app) {
                    return $app['twig']->render('contact.html.twig',array());
                });
$app->match('start.html',
          function () use ($app) {
                    return $app['twig']->render('start.html.twig',array());
                });
$app->match('/',
          function () use ($app) {
                    return $app['twig']->render('index.html.twig',array());
                });

$app->run();
