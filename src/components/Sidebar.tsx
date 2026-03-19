import { Linkedin, Github, Twitter, Dribbble } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden xl:block w-[340px] shrink-0">
      <div className="sticky top-24 text-center">
        <div className="glass-card p-8">
          <div className="mb-4 mx-auto w-[200px] h-[200px] rounded-2xl overflow-hidden">
            <img src="/images/avatar.webp" alt="ZenG" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">ZenG</h3>
          <p className="text-xs uppercase tracking-[3px] text-primary font-mono mb-4">AI Developer</p>
          <a href="mailto:themesflat@gmail.com" className="text-sm text-foreground underline underline-offset-4 hover:text-primary transition-colors">
            themesflat@gmail.com
          </a>
          <p className="text-xs text-muted-foreground mt-1">Based in San Francisco, CA</p>
          <div className="flex justify-center gap-3 mt-6">
            {[Linkedin, Github, Twitter, Dribbble].map((Icon, i) => (
              <a key={i} href="#" className="social-icon">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
