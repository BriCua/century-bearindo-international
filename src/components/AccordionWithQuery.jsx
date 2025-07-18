// AccordionWithQuery.jsx
import * as Accordion from "@radix-ui/react-accordion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";

export default function AccordionWithQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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
      className="w-full"
    >
      <Accordion.Item value="item1">
        <Accordion.Header>
          <Accordion.Trigger>Item 1</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Content for Item 1</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item2">
        <Accordion.Header>
          <Accordion.Trigger  className="text-[1.5rem] flex flex-row items-center justify-between">
            <span>Item 2</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Content for Item 2</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item3">
        <Accordion.Header>
          <Accordion.Trigger className="text-[1.5rem] flex flex-row items-center justify-between">
            <span>Item 3</span>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Content for Item 3</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
