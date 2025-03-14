package ee.mihkel.veebipood.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class KontrollTööController {

    @Autowired
    EsimeneTabelRepository esimeneTabelRepository;

    @Autowired
    TeineTabelRepository teineTabelRepository;

    @GetMapping("võtan-andmebaasist-ja-tagastan-mingi-muu-listi")
    public List<String> v6iListInt() {
        List<EsimeneEntity> esimesed = esimeneTabelRepository.findAll();
        List<String> stringid = new ArrayList<>();
        for (EsimeneEntity entity: esimesed) {
            if (true) {
                // teen midagi stringiga või intiga
                stringid.add(entity.sona);
            }
        }
        return stringid;
    }


    @GetMapping("kysin-midagi-ja-pidi-andmebaasi-minema")
    public List<TeineEntity> v6iListIntSobibKa() {
        List<EsimeneEntity> esimesed = esimeneTabelRepository.findAll();
        for (EsimeneEntity entity: esimesed) {
            if (true) {
                TeineEntity teine = new TeineEntity();
                teine.setMidaTaheti(25);
                teineTabelRepository.save(teine);
            }
        }
        return teineTabelRepository.findAll();
    }
}
