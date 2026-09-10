import { Arrow, Container, SectionHeading } from "./LandingUi";

const services = [
  "Web Development",
  "Software Quality Assurance",
  "Test Automation",
  "Product Discovery",
];

export default function Services() {
  return (
    <section
      className="border-t border-[#dfe2df] bg-white py-[78px] min-[901px]:py-[120px]"
      id="services"
    >
      <Container>
        <SectionHeading
          label="Capabilities"
          tone="green"
          title={
            <>
              Ways we can
              <br />
              <i className="not-italic text-[#747b78]">work together.</i>
            </>
          }
        >
          Flexible support for ambitious products, from a focused audit to a
          complete delivery partnership.
        </SectionHeading>
        <div className="mt-12 border-t border-[#dfe2df]">
          {services.map((service, index) => (
            <a
              className="grid grid-cols-[45px_1fr_30px] items-center border-b border-[#dfe2df] px-2 py-6 transition duration-300 hover:bg-[#eafade] min-[521px]:grid-cols-[70px_1fr_30px] min-[521px]:hover:pl-5"
              href="#contact"
              key={service}
            >
              <span className="text-[10px] font-bold tracking-[.12em] text-[#626766]">
                0{index + 1}
              </span>
              <h3 className="font-display text-[22px] tracking-[-.04em] min-[521px]:text-[28px]">
                {service}
              </h3>
              <Arrow />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
