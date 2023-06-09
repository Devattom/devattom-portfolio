<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitaad3bd370d8b0e6e9f5c8063614802ac
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitaad3bd370d8b0e6e9f5c8063614802ac::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitaad3bd370d8b0e6e9f5c8063614802ac::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitaad3bd370d8b0e6e9f5c8063614802ac::$classMap;

        }, null, ClassLoader::class);
    }
}
