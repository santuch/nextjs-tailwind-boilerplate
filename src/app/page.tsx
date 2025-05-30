import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div>
        <Button>Click me</Button>
      </div>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                TailwindCSS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#examples"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Examples
              </a>
              <a
                href="#cta"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build beautiful websites
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              with Tailwind CSS
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Rapidly build modern websites without ever leaving your HTML. A
            utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design,
            directly in your markup.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="#cta"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#features"
              className="bg-white text-gray-700 px-8 py-3 rounded-md text-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Tailwind CSS?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <SparklesIcon className="h-10 w-10 text-blue-600" />,
                title: 'Rapid Development',
                description:
                  'Build complex components from a constrained set of primitive utilities.',
              },
              {
                icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
                title: 'Responsive Design',
                description:
                  'Every utility is also available in variants for different screen sizes.',
              },
              {
                icon: <ShieldCheckIcon className="h-10 w-10 text-purple-600" />,
                title: 'Production Ready',
                description:
                  'Optimized for production with automatic unused CSS removal.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Example Components */}
        <section id="examples" className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Example Components
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Card',
                bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
              },
              {
                name: 'Button',
                bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
              },
              {
                name: 'Alert',
                bg: 'bg-gradient-to-br from-green-50 to-green-100',
              },
              {
                name: 'Badge',
                bg: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
              },
              { name: 'Input', bg: 'bg-gradient-to-br from-red-50 to-red-100' },
              {
                name: 'Modal',
                bg: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bg} p-6 rounded-xl h-40 flex items-center justify-center`}
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of developers already making their websites more
              beautiful and maintainable with Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                TailwindCSS
              </span>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center text-base text-gray-500">
                &copy; 2023 Tailwind CSS. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
