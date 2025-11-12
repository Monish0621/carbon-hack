import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  User,
  Factory,
  TrendingDown,
  BarChart3,
  Lightbulb,
  Leaf,
  Globe,
  Zap,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analysis",
      description: "Monitor carbon emissions with live data visualization",
    },
    {
      icon: TrendingDown,
      title: "AI Forecasting",
      description: "Predict future emissions using advanced ML models",
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Get personalized sustainability action plans",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNNiA2YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgc3Ryb2tlPSJyZ2JhKDc2LCAxNzUsIDgwLCAwLjEpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-40" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Sustainability Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
              Empowering a Greener Future with AI
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
              An intelligent carbon emission management system that helps individuals and
              organizations monitor, forecast, and reduce their environmental impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
              <Link to="/individual">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
                >
                  <User className="mr-2 h-5 w-5" />
                  Analyze My Footprint
                </Button>
              </Link>
              <Link to="/industry">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
                >
                  <Factory className="mr-2 h-5 w-5" />
                  Analyze Industry Emissions
                </Button>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2.5B", label: "Tonnes CO₂ Tracked" },
              { value: "15K+", label: "Active Users" },
              { value: "40%", label: "Average Reduction" },
              { value: "98%", label: "Accuracy Rate" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Make a Real Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Small actions today lead to significant environmental changes tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Leaf,
                text: "Plant 10 trees to offset 1 tonne of CO₂",
                color: "from-primary to-primary-dark",
              },
              {
                icon: Zap,
                text: "Reducing 100 kWh per month saves 82 kg CO₂",
                color: "from-secondary to-accent",
              },
              {
                icon: Globe,
                text: "Switching to solar cuts emissions by 20%",
                color: "from-accent to-primary",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg w-fit mb-4`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
