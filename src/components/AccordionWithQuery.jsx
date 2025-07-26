// AccordionWithQuery.jsx
import * as Accordion from "@radix-ui/react-accordion";
import { useSearchParams } from "react-router-dom";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../partials/accordion.css";

export default function AccordionWithQuery({ items }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current open item from query
  const openItem = searchParams.get("open") || "";

  // When accordion changes, update the query
  const handleValueChange = (newValue) => {
    if (newValue) {
      searchParams.set("open", newValue);
    } else {
      searchParams.delete("open");
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Accordion.Root
      type="single"
      collapsible
      value={openItem}
      onValueChange={handleValueChange}
      className="AccordionRoot"
    >
      {items.map((item) => (
        <Accordion.Item value={item.id} key={item.id} className="AccordionItem">
          <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger className="AccordionTrigger">
              <span><h5>{item.title}</h5></span>
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="AccordionContent">
            <div className="mt-4 w-9/10  border-[#e60000] border-2 rounded-lg"/>
  <div className="mt-4 mb-4 ml-12 mr-12">
    {Array.isArray(item.content) ? (
      item.content.map((paragraph, index) => (
        <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
      ))
    ) : (
      <p>{item.content}</p>
    )}
  </div>
</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}


