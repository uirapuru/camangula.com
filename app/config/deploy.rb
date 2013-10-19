set   :application,   "Camangula.com"
set   :deploy_to,     "/home/uirapuru/domains/camangula.com/"
set   :domain,        "s78.vdl.pl"

set   :scm,           :git
set   :repository,    "ssh://uirapuru@uirapuruadg.no-ip.org/home/uirapuru/git/camangula.com.git"

set :branch, fetch(:branch, "master")
set :env, fetch(:env, "production")

set :ssh_options, { :forward_agent => true }

role  :web,           "s78.vdl.pl"
role  :app,           "s78.vdl.pl", :primary => true

set   :use_sudo,      false
set   :keep_releases, 3

set :app_path,    "app"

set :model_manager, "doctrine"
# Or: `propel`

# Be more verbose by uncommenting the following line
logger.level = Logger::MAX_LEVEL

namespace :deploy do
  task :composer, :roles => :web do
    run "cd #{ current_path } && ./composer install -q"
  end
end

after "deploy", "deploy:composer" 
