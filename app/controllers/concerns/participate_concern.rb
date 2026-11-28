module ParticipateConcern
  extend ActiveSupport::Concern

  PARTICIPATE_ITEMS = [
    {
      id: "attend",
      icon: "location",
      title: "Attend an Exchange",
      text: "Find new-to-you supplies!",
      href: "#next-event"
    },
    {
      id: "donate-supplies",
      icon: "heart",
      title: "Donate Supplies",
      text: "Donate items you don't use",
      href: "#donations"
    },
    {
      id: "donate-funds",
      icon: "dollar",
      title: "Donate Funds",
      text: "Financially support The Community Exchange",
      href: "https://www.paypal.com/pool/9g3mvR5vom",
      external: true
    },
    {
      id: "faqs",
      icon: "question",
      title: "FAQs",
      text: "I have a question...",
      href: "#faqs"
    }
  ].freeze

  private

  def participate_items
    PARTICIPATE_ITEMS
  end
end
