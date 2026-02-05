import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  it('renders the hero section with main heading', () => {
    render(<App />);
    expect(screen.getByText(/See How We Manage/i)).toBeInTheDocument();
    expect(screen.getByText(/Your/i)).toBeInTheDocument();
    expect(screen.getByText(/Project/i)).toBeInTheDocument();
  });

  it('renders navigation menu with all sections', () => {
    render(<App />);
    const featuresLinks = screen.getAllByText('Features');
    const reportsLinks = screen.getAllByText('Reports');

    expect(featuresLinks.length).toBeGreaterThan(0);
    expect(reportsLinks.length).toBeGreaterThan(0);
  });

  it('opens and closes mobile menu', async () => {
    render(<App />);
    const menuButton = screen.getByRole('button', { name: /open menu/i });

    await userEvent.click(menuButton);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /close menu/i }));
    await waitFor(() => {
      expect(screen.queryByText('Navigate to Contact section')).not.toBeVisible();
    });
  });

  it('opens contact dialog when Work With Us button is clicked', async () => {
    render(<App />);
    const workWithUsButtons = screen.getAllByRole('button', { name: /work with us/i });

    await userEvent.click(workWithUsButtons[0]);
    expect(screen.getByText('Start Your Project')).toBeInTheDocument();
  });

  it('renders contact form with all required fields', async () => {
    render(<App />);
    const contactButton = screen.getAllByRole('button', { name: /work with us/i })[0];

    await userEvent.click(contactButton);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('validates form fields are properly associated with labels', async () => {
    render(<App />);

    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    expect(contactSection).toBeTruthy();

    // Check form field associations
    const firstNameInput = screen.getByLabelText(/first name/i);
    expect(firstNameInput).toHaveAttribute('id');
    expect(firstNameInput).toHaveAttribute('name', 'firstName');
  });

  it('renders social media links in footer', () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: /visit pandion on linkedin/i });
    const twitterLink = screen.getByRole('link', { name: /visit pandion on twitter/i });

    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(twitterLink).toHaveAttribute('href', expect.stringContaining('twitter.com'));
  });

  it('renders feature cards', () => {
    render(<App />);
    expect(screen.getByText('Real-Time Budget Tracking')).toBeInTheDocument();
    expect(screen.getByText('AI Invoice Processing')).toBeInTheDocument();
    expect(screen.getByText('Executive Dashboards')).toBeInTheDocument();
  });

  it('has proper ARIA attributes on mobile menu', async () => {
    render(<App />);
    const menuButton = screen.getByRole('button', { name: /open menu/i });

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');

    await userEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('scrolls to section when navigation button is clicked', async () => {
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    render(<App />);
    const featuresButton = screen.getAllByRole('button', { name: /navigate to features section/i })[0];

    await userEvent.click(featuresButton);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});
