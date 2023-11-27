import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./style.css";

const Faq = () => {
  const accordion = [
    {
      key: "1",
      title: "TATTOO CARE",
      desc: ` A tattoo is not only a beautiful decoration of our body,
                      but also a serious step that requires proper care. One of
                      the most important stages is the healing period, which
                      takes about three weeks. Our masters use a special healing
                      plastic, which helps to heal the skin faster and safer.
                      This plastic is glued after the tattoo and keeping for 3-5
                      days. During these days you can take a shawer. After
                      removing the plastic you should wash the tattoo with
                      non-parfume soap and apply a thin layer of special healing
                      cream, also for small tattoos is good to use coconut oil
                      instead of cream. During two weeks you should repeat the
                      process of washing the tattoo with soap and applying
                      cream/oil 5-6 times a day, so that the skin heals faster
                      and the tattoo looks its best. But don't forget that
                      during this period you should not exercise, sunbathe, have
                      sauna or salarium. It is also worth remembering that the
                      healing skin can itch, but don’t scratch it. Because
                      scratching can lead to infection and damage to the tattoo.
                      It is also important to maintain hygiene and not to touch
                      the tattoo with dirty hands. For about 3 more weeks, the
                      upper layer of the epidermis will be restored and the
                      tattoo will have a characteristic shine. Then the skin
                      will become completely matte. In general, tattoo care is a
                      responsible and important process that requires patience
                      and attention. But if you follow the rules and
                      recommendations of the master, your tattoo will look
                      beautiful and will keep the brightness of colors for a
                      long time.`,
    },
    {
      key: "2",
      title: "TATTOO COST",
      desc: `Before getting a tattoo, you need to know a few factors on
                    which the cost depends. The first and most obvious factor is
                    the size and placement of the tattoo. The larger the tattoo
                    and the more difficult it is to access, the higher the cost.
                    The second factor is the complexity of the drawing and its
                    detailing. If the sketch will be very detailed, the cost
                    will be higher. The third factor is the cost of consumables
                    and rent. The master uses only premium grade consumables
                    that ensure the safety and quality of the tattoo. And
                    finally, it is important to realize that you are paying for
                    something that you will have for life. A good master
                    realizes this and approaches the work with all
                    responsibility. He is willing to invest his time and
                    knowledge to make a tattoo that will not only be beautiful,
                    but also safe. *To find out the cost of the tattoo, you need
                    to describe your idea in detail. This will help the master
                    to estimate the amount of work and say you price. And
                    remember that the choice of the master is an investment in
                    your future tattoo.`,
    },
    {
      key: "3",
      title: "SAFETY",
      desc: `If you are thinking about getting a tattoo, you may have
                    questions about the safety of this procedure. We want to
                    assure you: if you choose our masters, the tattoo processing
                    is completely safe. Our tattoo team uses modern methods of
                    sterilization and disinfection of instruments and workspace.
                    Each master makes sure that all consumables are disposable.
                    All reusable tools have fully sterilized process after each
                    use. All this is done in order to prevent possible
                    infections. Also, don't forget that getting a tattoo is not
                    only a procedure but also an extremely important choice that
                    you make. Therefore, take your time and choose only proven
                    masters. Always ask all the questions you are interested in
                    and do not neglect your health. The majority inks, care
                    products and consumables are hypoallergenic. However, if you
                    have a possible exacerbation of skin diseases or allergic
                    reactions - the master will always agree to conduct a rapid
                    test, putting you paint on the place of the future tattoo.
                    It is conducted as on the skin, and with subcutaneous
                    application, in which a small dot is put. Further you follow
                    the body's reaction to it for a few days. And remember: if
                    you used the services of a reliable master and follow all
                    the recommendations for the care of the tattoo after the
                    procedure, it will keep beautiful for many years and will
                    not harm your health.`,
    },
    {
      key: "4",
      title: "PREPARATION FOR THE SESSION",
      desc: `Before getting a tattoo, it is very important to prepare
                    properly. This will not only help to make the process more
                    comfortable, but also to get a great result. One of the main
                    rules of preparation is to avoid alcohol and aspirin. They
                    can increase the risk of bleeding and affect the color and
                    quality of the tattoo. Also, you should not forget about
                    good sleep and have good meal befor getting tattoo. The
                    better you feel, the easier it will be the process of
                    tattooing. Clothing also plays an important role in this
                    process. It should be loose and comfortable, without
                    accessories that can interfere with the work of the master.
                    Also keep in mind that there is a risk to get dirty your
                    clothes with ink that will not wash off. Therefore, do not
                    forget to think about your closet or bring a change of
                    clothes. Do not shave your hair on the proposed placement of
                    tattooing, the master will do it during the session. If you
                    have dry skin, use moisturizers every day for a week before
                    the tattoo session. And, of course, do not forget about a
                    good mood. It will help you relax and enjoy the process, as
                    well as to help the artist to create the best possible
                    result. By following these simple rules, you will be able to
                    enjoy the result of your tattoo.`,
    },
    {
      key: "5",
      title: "COVERING SCARES",
      desc: `Tattoo Scar Covering is a procedure that allows you to cover
                    up scars or other skin imperfections with a tattoo. It is
                    often done by people who have noticeable scars from
                    injuries, surgeries or burns, which can be psychologically
                    difficult and cause dissatisfaction with their own bodies.
                    The process of cover up scars with tattoos can be quite
                    complicated, but our artists know how to work with scars. In
                    order to cover a scar, the artist must understand the
                    anatomy of the body and know how to best use design and
                    colors to cover the scar. In order to get the best results
                    when covering scars with tattoos, the artist should discuss
                    with the client all the details. Finally, it is important to
                    realize that covering scars with tattoos can be a painful
                    process, especially if the scar is located in a sensitive
                    area of the body. If you would like to cover your scar with
                    a tattoo, contact tattoo artist for a consultation. Keep in
                    mind that covering scars with tattoos is more than just a
                    cosmetic procedure. It can help you overcome emotional
                    issues and learn to accept your body as it is.`,
    },
    {
      key: "6",
      title: "TATTOO COVER UP",
      desc: `Covering up old tattoos is a process in which a new tattoo
                    is placed on top of an old one. This can be useful if you
                    are not satisfied with your old tattoo or if you want to
                    update its design. Cover-up an old tattoo can be difficult
                    if it was done with dark colors or has too many dark lines
                    and details. To get around these difficulties, our masters
                    have a good understanding of color theories and tattooing
                    techniques. Before you decide to cover up an old tattoo, you
                    should consult with a artist and find out if it is possible
                    in your case. Finally, it is important to remember that the
                    process of covering up an old tattoo may take longer and
                    cost more expensive. Therefore, if you decide to cover over
                    your old tattoo, the artist should conduct a detailed
                    consultation to find out what your goals are and offer you
                    the best options to solve the problem.`,
    },
    {
      key: "7",
      title: "HOW TO GET A TATTOO IDEA",
      desc: `Many of us have thought about getting a tattoo. But the
                    question often arises: what to put on the body? This is an
                    important choice, because the tattoo the rest of your life.
                    If you have not yet decided on the motive, then you should
                    not rush. Listen to your desires and interests. Maybe it
                    will be a quote from your favorite book or a large colorful
                    drawing that has a special meaning for you, or maybe you
                    want to make just a picture you like for the aesthetics of
                    your body. But if inspiration still doesn't come, then don't
                    despair. Social media and portfolios of tattoo artists come
                    to the rescue. Follow the works of tattoo artists on social
                    media. Instagram is a great source of inspiration. You can
                    find the motif you want, see how it will look on skin,
                    choose the style. Another source of inspiration is
                    Pinterist. Here you can create your own board with images
                    you like. But remember that in order to realize your idea,
                    it is important to describe the idea to a artist in detail
                    or give him a visual references. Do not hesitate to ask
                    questions to get exactly what you want. Choosing a motif for
                    your tattoo can take time, but don't rush. It is important
                    that your tattoo is special to you and has a special
                    meaning. Find your inspiration and make this choice with
                    confidence.`,
    },
    {
      key: "8",
      title: "PAIN OF TATTOO PROCESS",
      desc: `Discomfort is an inevitable part of getting a tattoo.
                    However, there is a special anesthetic cream that can help
                    reduce pain. Which we can use as needed. In addition, modern
                    tattoo machines work quite gently thanks to the latest
                    technology. Our artists use special needles that reduce pain
                    and discomfort during the tattooing process on the skin.
                    Still, if you decide to get a tattoo, it is best to prepare
                    for the procedure in advance. In order to reduce discomfort,
                    it is recommended to get a good night's sleep and eat a
                    hearty meal before the session. But you shouldn't be afraid
                    of discomfort. Most clients say they get used to the
                    sensations surprisingly quickly and sometimes even enjoy the
                    process.`,
    },
    {
      key: "9",
      title: "SESSION DURATION",
      desc: `Tattooing is a painstaking process that requires attention
                    and patience of both a artist and a client. The time taken
                    to apply a tattoo depends on its size and complexity. For
                    the application of miniature works, such as small texts or
                    symbols, it takes from 1 to 2 hours. This process does not
                    require special skin preparation, so it can be done quite
                    quickly. A full session of tattooing take from 3 to 6 hours.
                    Applying complex drawings, decorating large areas of the
                    skin, a lot of details - all this requires careful
                    preparation of a artist. Especially large projects are
                    divided into several sessions. The approximate time required
                    to apply exactly your tattoo, a artist will always be able
                    to say at the appointment for a session.`,
    },
  ];
  return (
    <div className="faqContainer" id="faq">
      <h2
        style={{
          textDecoration: "underline 2px rgb(9, 141, 102)",
          textUnderlineOffset: "15px",
        }}
      >
        FAQ
      </h2>
      {window.innerWidth > 600 ? (
        <Tab.Container defaultActiveKey="1">
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1" className="nav-link-title">
                    TATTOO CARE
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" className="nav-link-title">
                    TATTOO COST
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3" className="nav-link-title">
                    SAFETY
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4" className="nav-link-title">
                    PREPARATION FOR THE SESSION
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5" className="nav-link-title">
                    COVERING SCARES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6" className="nav-link-title">
                    TATTOO COVER UP
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="7" className="nav-link-title">
                    HOW TO GET A TATTOO IDEA
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="8" className="nav-link-title">
                    PAIN OF TATTOO PROCESS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="9" className="nav-link-title">
                    SESSION DURATION
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <p className="p-faq-paragraph">
                    A tattoo is not only a beautiful decoration of our body, but
                    also a serious step that requires proper care. One of the
                    most important stages is the healing period, which takes
                    about three weeks. Our masters use a special healing
                    plastic, which helps to heal the skin faster and safer. This
                    plastic is glued after the tattoo and keeping for 3-5 days.
                    During these days you can take a shower. After removing the
                    plastic you should wash the tattoo with non-parfume soap and
                    apply a thin layer of special healing cream, also for small
                    tattoos it is good to use coconut oil instead of cream. During
                    two weeks you should repeat the process of washing the
                    tattoo with soap and applying cream/oil 5-6 times a day, so
                    that the skin heals faster and the tattoo looks its best.
                    <br />But don't forget that during this period you should not
                    exercise, sunbath, have sauna or salarium. It is also worth
                    remembering that the healing skin can itch, but don’t
                    scratch it. Because scratching can lead to infection and
                    damage to the tattoo. It is also important to maintain
                    hygiene and not to touch the tattoo with dirty hands. For
                    about 3 more weeks, the upper layer of the epidermis will be
                    restored and the tattoo will have a characteristic shine.
                    Then the skin will become completely matte. In general,
                    tattoo care is a responsible and important process that
                    requires patience and attention. But if you follow the rules
                    and recommendations of the master, your tattoo will look
                    beautiful and will keep the brightness of colors for a long
                    time.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <p className="p-faq-paragraph">
                    Before getting a tattoo, you need to know a few factors on
                    which the cost depends. <br />The first and most obvious factor is
                    the size and placement of the tattoo. The larger the tattoo
                    and the more difficult it is to access, the higher the cost.
                    The second factor is the complexity of the drawing and its
                    detailing. If the sketch will be very detailed, the cost
                    will be higher. The third factor is the cost of consumables
                    and rent. The master uses only premium grade consumables
                    that ensure the safety and quality of the tattoo. And
                    finally, it is important to realize that you are paying for
                    something that you will have for life. <br />A good master
                    realizes this and approaches the work with all
                    responsibility. He is willing to invest his time and
                    knowledge to make a tattoo that will not only be beautiful,
                    but also safe. <br />*To find out the cost of the tattoo, you need
                    to describe your idea in details. This will help the master
                    to estimate the amount of work and say you price. And
                    remember that the choice of the master is an investment in
                    your future tattoo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <p className="p-faq-paragraph">
                    If you are thinking about getting a tattoo, you may have
                    questions about the safety of this procedure. We want to
                    assure you: if you choose our masters, the tattoo processing
                    is completely safe. Our tattoo team uses modern methods of
                    sterilization and disinfection of instruments and workspace.
                    Each master makes sure that all consumables are disposable.
                    All reusable tools have fully sterilized process after each
                    use. All this is done in order to prevent possible
                    infections. <br />Also, don't forget that getting a tattoo is not
                    only a procedure but also an extremely important choice that
                    you make. Therefore, take your time and choose only proven
                    masters. Always ask all the questions you are interested in
                    and do not neglect your health. The majority inks, care
                    products and consumables are hypoallergenic. <br />However, if you
                    have a possible exacerbation of skin diseases or allergic
                    reactions - the master will always agree to conduct a rapid
                    test, putting you paint on the place of the future tattoo.
                    It is conducted as on the skin, and with subcutaneous
                    application, in which a small dot is put. Further you follow
                    the body's reaction to it for a few days. <br />And remember: if
                    you used the services of a reliable master and follow all
                    the recommendations for the care of the tattoo after the
                    procedure, it will keep beautiful for many years and will
                    not harm your health.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <p className="p-faq-paragraph">
                    Before getting a tattoo, it is very important to prepare
                    properly. This will not only help to make the process more
                    comfortable, but also to get a great result. One of the main
                    rules of preparation is to avoid alcohol and aspirin. They
                    can increase the risk of bleeding and affect the color and
                    quality of the tattoo. <br />Also, you should not forget about
                    good sleep and have good meal befor getting tattoo. The
                    better you feel, the easier it will be the process of
                    tattooing. Clothing also plays an important role in this
                    process. It should be loose and comfortable, without
                    accessories that can interfere with the work of the master.
                    Also keep in mind that there is a risk to get dirty your
                    clothes with ink that will not wash off. <br />Therefore, do not
                    forget to think about your closet or bring a change of
                    clothes. Do not shave your hair on the proposed placement of
                    tattooing, the master will do it during the session. If you
                    have dry skin, use moisturizers every day for a week before
                    the tattoo session. And, of course, do not forget about a
                    good mood. It will help you relax and enjoy the process, as
                    well as to help the artist to create the best possible
                    result. By following these simple rules, you will be able to
                    enjoy the result of your tattoo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <p className="p-faq-paragraph">
                    Tattoo Scar Covering is a procedure that allows you to cover
                    up scars or other skin imperfections with a tattoo. It is
                    often done by people who have noticeable scars from
                    injuries, surgeries or burns, which can be psychologically
                    difficult and cause dissatisfaction with their own bodies.
                    The process of cover up scars with tattoos can be quite
                    complicated, but our artists know how to work with scars. In
                    order to cover a scar, the artist must understand the
                    anatomy of the body and know how to best use design and
                    colors to cover the scar. In order to get the best results
                    when covering scars with tattoos, the artist should discuss
                    with the client all the details. <br />Finally, it is important to
                    realize that covering scars with tattoos can be a painful
                    process, especially if the scar is located in a sensitive
                    area of the body. If you would like to cover your scar with
                    a tattoo, contact tattoo artist for a consultation. <br />Keep in
                    mind that covering scars with tattoos is more than just a
                    cosmetic procedure. It can help you overcome emotional
                    issues and learn to accept your body as it is.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <p className="p-faq-paragraph">
                    Covering up old tattoos is a process in which a new tattoo
                    is placed on top of an old one. This can be useful if you
                    are not satisfied with your old tattoo or if you want to
                    update its design. Cover-up an old tattoo can be difficult
                    if it was done with dark colors or has too many dark lines
                    and details. To get around these difficulties, our masters
                    have a good understanding of color theories and tattooing
                    techniques. Before you decide to cover up an old tattoo, you
                    should consult with a artist and find out if it is possible
                    in your case. <br />Finally, it is important to remember that the
                    process of covering up an old tattoo may take longer and
                    cost more expensive. <br />Therefore, if you decide to cover over
                    your old tattoo, the artist should conduct a detailed
                    consultation to find out what your goals are and offer you
                    the best options to solve the problem.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="7">
                  <p className="p-faq-paragraph">
                    Many of us have thought about getting a tattoo. But the
                    question often arises: what to put on the body? This is an
                    important choice, because the tattoo the rest of your life.
                    If you have not yet decided on the motive, then you should
                    not rush. Listen to your desires and interests. Maybe it
                    will be a quote from your favorite book or a large colorful
                    drawing that has a special meaning for you, or maybe you
                    want to make just a picture you like for the aesthetics of
                    your body. But if inspiration still doesn't come, then don't
                    despair. Social media and portfolios of tattoo artists come
                    to the rescue. Follow the works of tattoo artists on social
                    media. Instagram is a great source of inspiration. You can
                    find the motif you want, see how it will look on skin,
                    choose the style. <br />Another source of inspiration is
                    Pinterist. Here you can create your own board with images
                    you like. But remember that in order to realize your idea,
                    it is important to describe the idea to a artist in detail
                    or give him a visual references. Do not hesitate to ask
                    questions to get exactly what you want. Choosing a motif for
                    your tattoo can take time, but don't rush. It is important
                    that your tattoo is special to you and has a special
                    meaning. Find your inspiration and make this choice with
                    confidence.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="8">
                  <p className="p-faq-paragraph">
                    Discomfort is an inevitable part of getting a tattoo.
                    However, there is a special anesthetic cream that can help
                    reduce pain. Which we can use as needed. In addition, modern
                    tattoo machines work quite gently thanks to the latest
                    technology. Our artists use special needles that reduce pain
                    and discomfort during the tattooing process on the skin.
                    Still, if you decide to get a tattoo, it is best to prepare
                    for the procedure in advance. In order to reduce discomfort,
                    it is recommended to get a good night's sleep and eat a
                    hearty meal before the session. But you shouldn't be afraid
                    of discomfort. Most clients say they get used to the
                    sensations surprisingly quickly and sometimes even enjoy the
                    process.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="9">
                  <p className="p-faq-paragraph">
                    Tattooing is a painstaking process that requires attention
                    and patience of both a artist and a client. The time taken
                    to apply a tattoo depends on its size and complexity. For
                    the application of miniature works, such as small texts or
                    symbols, it takes from 1 to 2 hours. This process does not
                    require special skin preparation, so it can be done quite
                    quickly. A full session of tattooing take from 3 to 6 hours.
                    Applying complex drawings, decorating large areas of the
                    skin, a lot of details - all this requires careful
                    preparation of a artist. Especially large projects are
                    divided into several sessions. The approximate time required
                    to apply exactly your tattoo, a artist will always be able
                    to say at the appointment for a session.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : (
        <Accordion alwaysOpen>
          {accordion.map(({ key, title, desc }, index) => (
            <Accordion.Item eventKey={key} key={index}>
              <Accordion.Header className="nav-link-title" style={{ fontSize: '40px' }}>
                {title}
              </Accordion.Header>
              <Accordion.Body>
                <p className="p-faq-paragraph">{desc}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default Faq;
